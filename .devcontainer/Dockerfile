ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

RUN su node -c "npm install -g yarn"
RUN su node -c "npm install -g @angular/cli@14.0.0"
