# tdimeco

FROM httpd:2.4
MAINTAINER Thomas Di Meco

# Copy files
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

# Installations
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_5.x | bash - && \
    apt-get install -y git nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    npm install -g grunt-cli bower

# Clone Git repository
RUN mkdir -p /tmp/tdimeco && \
    git clone -b master --depth 1 https://github.com/tdimeco/tdimeco.fr.git /tmp/tdimeco

# Build app
WORKDIR /tmp/tdimeco
RUN npm install
RUN bower --allow-root install
RUN grunt dist

# Deploy app
WORKDIR /usr/local/apache2
RUN rm -rf ./htdocs && \
    mv /tmp/tdimeco/dist ./htdocs && \
    rm -fr /tmp/tdimeco

# Configure container
EXPOSE 80
