FROM python:3.11.1

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/djangoreact


COPY ./requirements.txt /usr/src/djangoreact/requirements.txt
RUN pip install -r requirements.txt

COPY . /usr/src/djangoreact

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

