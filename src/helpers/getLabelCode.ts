export const getLabel = (code): string => {
    if (code.startsWith('99')) return 'Evaluation and Management (E/M)';
    if (code.startsWith('11')) return 'Surgery';
    if (code.startsWith('71') || code.startsWith('73')) return 'Radiology';
    if (code.startsWith('80') || code.startsWith('83')) return 'Laboratory';
    if (code.startsWith('90') || code.startsWith('93')) return 'Medicine';
    if (code.startsWith('A4') || code.startsWith('J1')) return 'Miscellaneous';
    if (code.startsWith('00')) return 'Anesthesia';
    if (code.startsWith('97')) return 'Physical Medicine and Rehabilitation';
    if (code.startsWith('90')) return 'Immunizations';
    if (code.startsWith('92')) return 'Ophthalmology';
    return 'Not Found Code :(';
};
