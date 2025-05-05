# Etapa 1: Build com Maven
FROM ubuntu:latest AS build

RUN apt-get update && apt-get install -y openjdk-17-jdk maven

# criamos uma pasta e defina como diretório de trabalho
WORKDIR /app

COPY . .

# Usamos o wrapper do Maven, que é mais seguro e controlado
RUN ./mvnw clean package -DskipTests

# Etapa 2: Imagem final com apenas o JAR
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copiamos o JAR gerado na etapa de build
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
