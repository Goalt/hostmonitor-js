build:
	docker build -t hostmonitor-js:latest .
run:
	docker run -p 80:80 -e API_URL="http://localhost:8080/statistics" hostmonitor-js:latest