# Import the base image as UBI-Nodejs 18 image
FROM registry.access.redhat.com/ubi8/nodejs-20:1-69

# Set the working directory to /project
WORKDIR /project

# Copy package files in container current directory
COPY --chown=1001:1001 src/main/resources/package.json src/main/resources/package-lock.json ./


# Install all Angular dependencies
RUN npm ci

# Add application files in container
COPY src/main/resources/ .
RUN ls *.*

# Set permission of .angular file in container
VOLUME ["/project/.angular"]

# Open port to allow traffic in container
EXPOSE 8089

# Run start script using npm command
CMD ["npm", "start", "--env prod", "--port 8089"]