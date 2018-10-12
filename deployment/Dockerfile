# tdimeco

FROM httpd:2.4
MAINTAINER Thomas Di Meco

# Copy files
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

# Installations
RUN apt-get update && \
    apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install -y git nodejs yarn bzip2 libfontconfig && \
    apt-get autoremove -y --purge curl apt-transport-https && \
    apt-get autoremove -y --purge && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Clone and build the app
RUN mkdir -p /tmp/tdimeco
WORKDIR /tmp/tdimeco
RUN git clone -b master --depth 1 https://github.com/tdimeco/tdimeco.fr.git /tmp/tdimeco && \
    yarn install && \
    yarn run build && \
    rm -rf /usr/local/apache2/htdocs && \
    mv ./dist /usr/local/apache2/htdocs && \
    rm -rf /tmp/tdimeco

# Configure container
EXPOSE 80
