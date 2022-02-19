function GetStatus(callback) {
    const url = "http://localhost:8080/statistics";
    const options = {
        headers: {
            accept: "application/json"
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(callback)
}

function GetDefault() {
    return {
        ram: {
            Total: "NaN",
            Available: "NaN"
        },
        storage: {
            Total: "NaN",
            Available: "NaN",
            Free: "NaN"
        },
        loadavg: {
            Load1: NaN,
            Load5: NaN,
            Load15: NaN
        },
        uptime: {
            dur: NaN,
        },
        DockerContainers: {
            "Nan": "Up 32 minutes",
        },
        updatedAt: "1645278627"
    }
}

export { GetStatus, GetDefault }