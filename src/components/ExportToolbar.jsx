import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { html as beautifyHtml } from 'js-beautify';
import './ExportToolbar.css';

const BEAUTIFY_OPTIONS = {
    indent_size: 4,
    wrap_line_length: 120,
    end_with_newline: true,
};

function replaceFontAwesomeIconsWithITags(root) {
    root.querySelectorAll('svg[data-prefix][data-icon]').forEach((svg) => {
        const prefix = svg.getAttribute('data-prefix');
        const icon = svg.getAttribute('data-icon');

        const i = document.createElement('i');
        i.className = `${prefix} fa-${icon}`;

        svg.replaceWith(i);
    });

    return root;
}

function formatExportRegion(node) {
    if (!node) return '';

    const clone = node.cloneNode(true);
    clone.querySelectorAll('[data-no-export]').forEach((el) => el.remove());
    replaceFontAwesomeIconsWithITags(clone);

    return beautifyHtml(clone.innerHTML, BEAUTIFY_OPTIONS);
}

function ExportToolbar({ targetRef }) {
    const [html, setHtml] = useState('');
    const [copied, setCopied] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const copiedTimeoutRef = useRef(null);

    const refresh = useCallback(() => {
        setHtml(formatExportRegion(targetRef.current));
    }, [targetRef]);

    useEffect(() => {
        refresh();

        const node = targetRef.current;
        if (!node) return undefined;

        const observer = new MutationObserver(refresh);
        observer.observe(node, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true,
        });

        return () => observer.disconnect();
    }, [targetRef, refresh]);

    useEffect(() => () => clearTimeout(copiedTimeoutRef.current), []);

    const handleCopy = async () => {
        const formatted = formatExportRegion(targetRef.current);
        setHtml(formatted);

        await navigator.clipboard.writeText(formatted);

        setCopied(true);
        clearTimeout(copiedTimeoutRef.current);
        copiedTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    };

    if (minimized) {
        return (
            <button
                type="button"
                className="export-toolbar-fab"
                data-no-export
                onClick={() => setMinimized(false)}
                title="Open Developer Handoff HTML export"
            >
                {'</>'}
            </button>
        )
    }

    return (
        <div className="export-toolbar" data-no-export>
            <div className="export-toolbar-bar">
                <span className="export-toolbar-label">
                    Developer Handoff — Copy the HTML below to use in Razor Pages
                </span>
                <button
                    type="button"
                    className="export-toolbar-copy-btn"
                    data-copied={copied}
                    onClick={handleCopy}
                >
                    {copied ? 'Copied!' : 'Copy HTML'}
                </button>
                <button
                    type="button"
                    className="export-toolbar-minimize-btn"
                    onClick={() => setMinimized(true)}
                    title="Minimize"
                    aria-label="Minimize developer handoff panel"
                >
                    &minus;
                </button>
            </div>
            <pre className="export-toolbar-preview"><code>{html}</code></pre>
        </div>
    )
}

ExportToolbar.propTypes = {
    targetRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};

export default ExportToolbar;
