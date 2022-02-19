var format = require('format-duration')

function FormatStatus(data) {
    data.ram.Total = formatMemmory(parseInt(data.ram.Total) * 1024)
    data.ram.Available = formatMemmory(parseInt(data.ram.Available) * 1024)

    data.storage.Total = formatMemmory(parseInt(data.storage.Total) * 1024)
    data.storage.Available = formatMemmory(parseInt(data.storage.Available) * 1024)
    data.storage.Free = formatMemmory(parseInt(data.storage.Free) * 1024)

    data.updatedAt = formatTime(data.updatedAt)
    data.uptime.dur = format(data.uptime.dur * 1000)

    return data
}

function formatMemmory(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function formatTime(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toString();
}

export {FormatStatus}