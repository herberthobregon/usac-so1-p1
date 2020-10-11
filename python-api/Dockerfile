FROM python:3.8.6-alpine3.12
WORKDIR /app
ENV PORT 5000
COPY . .
RUN pip install -r requirements.txt
CMD python main.py