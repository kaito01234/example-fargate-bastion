FROM mcr.microsoft.com/devcontainers/base:bullseye

# install session-manager-plugin
RUN curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/ubuntu_64bit/session-manager-plugin.deb" \
  -o "session-manager-plugin.deb" \
  && dpkg -i session-manager-plugin.deb
