# Copyright 2016 Eric Tsai
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM ubuntu:14.04

MAINTAINER Eric Tsai <erictsai6@gmail.com>

# Install required packages
RUN apt-get update && apt-get install -y \
	git \
	python \
	python-dev \
	python-setuptools \
	nginx \
	supervisor \
    libxml2-dev \
    libxslt-dev \
    lib32z1-dev

RUN easy_install pip

# install uwsgi
RUN pip install uwsgi
RUN mkdir /var/log/uwsgi

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/sites-available/default
COPY supervisor.conf /etc/supervisor/conf.d/

COPY requirements.txt /home/docker/app/
RUN pip install -r /home/docker/app/requirements.txt

COPY . /home/docker/app/

EXPOSE 80
CMD ["supervisord", "-n"]