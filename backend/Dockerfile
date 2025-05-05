FROM ubuntu:latest AS build

RUN apt-get update
RUN apt-get install openjdk-23-jdk maven -y

WORKDIR /app

COPY . .

RUN mvn clean install -f pom.xml

FROM openjdk:23-jdk-slim

EXPOSE 8080

COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
