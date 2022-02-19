build:
	docker build -t hostmonitor-js:latest .
run:
	docker run -p 80:80 hostmonitor-js:latest