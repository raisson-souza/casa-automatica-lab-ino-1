#include <WiFi.h>
#include <WebServer.h>
#include <ESP32Servo.h>
#include <DHT.h>

#define DHTPIN 13
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
Servo portao;

// Credenciais Wi-Fi
const char* ssid = "AMF-CORP";
const char* password = "@MF$4515";

// Definição de pinos e estado dos LEDs
const int leds[] = { 2, 4, 5, 18, 19, 21 };
const int totalLeds = sizeof(leds) / sizeof(leds[0]);
bool ledEstado[] = { false, false, false, false, false, false };

// Instância do servidor na porta 80
WebServer server(80);

// Função para conectar o ESP32 à rede Wi-Fi
void conectarWiFi() {
  Serial.print("Conectando ao WiFi ");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi conectado!");
  Serial.println("Endereço IP: ");
  Serial.println(WiFi.localIP());
}

// Função para obter o índice do LED a partir do nome passado na URL
int getLedIndex(String nome) {
  if (nome == "LED1") return 0;
  if (nome == "LED2") return 1;
  if (nome == "LED3") return 2;
  if (nome == "LED4") return 3;
  if (nome == "LED5") return 4;
  if (nome == "LED6") return 5;
  if (nome == "LED7") return 6;
  return -1;  // Retorna -1 se o nome não for válido
}

// Manipulador para requisições GET - Retorna o estado de um LED específico
void handleGet() {
  if (server.hasArg("nome")) {
    String nome = server.arg("nome");
    int ledIndex = getLedIndex(nome);

    if (ledIndex != -1) {
      String estado = ledEstado[ledIndex] ? "true" : "false";
      server.send(200, "text/plain",estado + "\n");
    } else {
      server.send(400, "text/plain", "Nome inválido\n");
    }
  } else {
    server.send(400, "text/plain", "Parâmetro 'nome' não fornecido\n");
  }
}

// Manipulador para requisições POST - Liga ou desliga um LED específico
void 
handlePost() {
  if (server.hasArg("nome") && server.hasArg("ligar")) {
    String nome = server.arg("nome");
    int ledIndex = getLedIndex(nome);
    bool ligar = server.arg("ligar") == "true";

    if (ledIndex != -1) {
      ledEstado[ledIndex] = ligar;
      digitalWrite(leds[ledIndex], ligar ? HIGH : LOW);
      String estado = ligar ? "ligado" : "desligado";
      server.send(200, "text/plain", nome + " foi " + estado + "\n");
    } else {
      server.send(400, "text/plain", "Nome inválido\n");
    }
  } else {
    server.send(400, "text/plain", "Parâmetros 'nome' ou 'ligar' não fornecidos\n");
  }
}

// Manipulador para abrir e fechar o portão
void handlePortao() {
  if (server.hasArg("acao")) {
    String acao = server.arg("acao");

    if (acao == "abrir") {
      portao.write(90);
      Serial.println("FOI");
      server.send(200, "text/plain", "Portão aberto\n");
    } else if (acao == "fechar") {
      portao.write(180);
      server.send(200, "text/plain", "Portão fechado\n");
      Serial.println("FOI");
    } else {
      server.send(400, "text/plain", "Ação inválida\n");
      Serial.println("TA DANDO MERDA");
    }
  } else {
    server.send(400, "text/plain", "Parâmetro 'acao' não fornecido\n");
    Serial.println("ACAO TA DANDO O COOL");
  }
}

void handleDHT() {

  float temperatura = dht.readTemperature();
  float umidade = dht.readHumidity();
  Serial.println(temperatura);
  Serial.println(umidade);

  if (isnan(temperatura) || isnan(umidade)) {
    server.send(500, "text/plain", "Erro ao ler o sensor DHT11\n");
    return;
  }

  // Formatação dos valores como um array de strings
  String resposta = "[" + String(temperatura) + ", " + String(umidade) + "]";
  server.send(200, "text/plain", resposta);
}

void setup() {
  Serial.begin(115200);

  portao.attach(23);

  dht.begin();

  // Configura os pinos dos LEDs como saídas e inicia com todos desligados
  for (int i = 0; i < totalLeds; i++) {
    pinMode(leds[i], OUTPUT);
    digitalWrite(leds[i], LOW);
  }

  // Conecta à rede Wi-Fi
  conectarWiFi();

  // Define os manipuladores para GET e POST
  server.on("/led", HTTP_GET, handleGet);
  server.on("/led", HTTP_POST, handlePost);

  server.on("/portao", HTTP_POST, handlePortao);

  server.on("/dht", HTTP_GET, handleDHT);

  // Inicia o servidor
  server.begin();
  Serial.println("Servidor HTTP iniciado");
}

void loop() {
  server.handleClient();  // Processa as requisições de cliente
}
