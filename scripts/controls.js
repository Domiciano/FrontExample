const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const container = document.getElementById('container');

const client = new Paho.MQTT.Client('broker.hivemq.com', Number(8000), "icesiUserDomicianoRincon");
const topic = "icesitel";

//Listener de mensajes
client.onMessageArrived = (msg) => {
    console.log("Arrived!: "+msg.payloadString);
    container.innerHTML = container.innerHTML + `<p>${msg.payloadString}</p>`;
}

client.connect(
    {
        onSuccess:() => {
            console.log("conectado!")
            client.subscribe(topic);
        }
    }
);


const sendMessage = (msg) => {
    let message = new Paho.MQTT.Message(msg);
    message.destinationName = topic;
    client.send(message);
};

sendBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let messageText = messageInput.value;
    sendMessage(messageText);
});