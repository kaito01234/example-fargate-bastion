FROM public.ecr.aws/amazonlinux/amazonlinux:2023

COPY ./check_login.sh .
RUN chmod 700 check_login.sh

RUN dnf update
RUN dnf -y install procps util-linux
RUN dnf -y localinstall https://dev.mysql.com/get/mysql80-community-release-el9-5.noarch.rpm
RUN dnf -y install mysql-community-client

ENTRYPOINT ["./check_login.sh"]
