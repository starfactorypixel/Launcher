build-win:
	electron-builder --win --x64
prebuild-linux:
	docker build . -t dev2alert/pixel-launcher-linux
build-linux:
	docker run --rm --name pixel-launcher-linux -v $(CURDIR)/build:/app/build dev2alert/pixel-launcher-linux