# Etapa 1: Build da aplicação
FROM maven:3.9.4-eclipse-temurin-17 AS build

WORKDIR /app

# Copia apenas os arquivos necessários
COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .
COPY mvnw.cmd .
COPY src ./src

# Compila o projeto
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Etapa 2: Imagem final com apenas o JAR
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
