export function getAvailableVersions() {
    const allPages = import.meta.globEager('/src/routes/manual/*/**/*.md');
    const versionSet = new Set<string>();

    for (const path in allPages) {
        const match = path.match(/\/manual\/([^\/]+)\//);
        if (match && match[1]) {
            versionSet.add(match[1]);
        }
    }

    return Array.from(versionSet).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}
