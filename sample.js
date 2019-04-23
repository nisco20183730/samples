const connectionInfo = navigator.connection;

if (connectionInfo !== undefined) {
	const init = function() {
		document.getElementById('type').textContent = connectionInfo.type;
		document.getElementById('effectiveType').textContent = connectionInfo.effectiveType;
		document.getElementById('downlink').textContent = connectionInfo.downlink + ' Mb/s';
		document.getElementById('downlinkMax').textContent = connectionInfo.downlinkMax + ' Mb/s';
		document.getElementById('rtt').textContent = connectionInfo.rtt + ' ms';
		document.getElementById('saveData').textContent = connectionInfo.saveData;
	};
	init();

	if ('onchange' in connectionInfo) {
		connectionInfo.addEventListener('change', init);
	} else if ('ontypechange' in connectionInfo) {
		connectionInfo.addEventListener('typechange', init);
	}
}
