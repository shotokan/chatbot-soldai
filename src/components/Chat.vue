<template lang="pug">
  main.main-content
    section.section
      .message.is-link
        .message-header
          p Información
          button.delete
        .message-body Fausto Ketchum ha decidido que será el próximo maestro pokemon. Para cumplir su meta acude al profesor Oak, pero para su sorpresa el profesor se niega a seguir regalando su trabajo. Despues de una larga discusión ambos llegan a un trato, una nueva versión del Pokedex a cambio de un Pikachu V2.
      beautiful-chat(:participants="participants" :titleImageUrl="titleImageUrl" :onMessageWasSent="onMessageWasSent" 
      :messageList="messageList" :newMessagesCount="newMessagesCount" :isOpen="isChatOpen" :close="closeChat" :open="openChat"
      :showEmoji="true" :showFile="false" :showTypingIndicator="showTypingIndicator" :colors="colors" :alwaysScrollToBottom="alwaysScrollToBottom")
</template>

<script>
import services from '../services/chat'

export default {
  name: 'app',
  data () {
    return {
      redColors: {
        header: {
          bg: '#3173DC',
          text: '#fff'
        }
      },
      participants: [
        {
          id: 'user1',
          name: 'Invitado',
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://orig00.deviantart.net/fcba/f/2016/282/2/7/animated_vulpix_alola_form_pokeball_by_thelittlelight-dake1h1.gif',
      messageList: [], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#3173DC',
          text: '#ffffff'
        },
        launcher: {
          bg: '#3173DC'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: true // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
    }
  },
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        console.log('enviando...', text)
        this.showTypingIndicator = 'user2'
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        services.sendQuestion(text).then(resp => {
          console.log(resp.data)
          let botAnswer = resp.data
          let message = { author: 'user2', type: 'text', data: { text: botAnswer.data.message } }
          console.log(message)
          this.messageList = [ ...this.messageList, message ]
          this.showTypingIndicator = ''
        }).catch(err => {
          console.log(err)
          let message = { author: 'user2', type: 'text', data: { text: 'Ha ocurrido un problema, intenta de nuevo...' } }
          console.log(message)
          this.messageList = [ ...this.messageList, message ]
          this.showTypingIndicator = ''
        })
        // this.onMessageWasSent()
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      console.log('enviando...')
      console.log(message.data)
      this.messageList = [ ...this.messageList, message ]
      this.sendMessage(message.data.text)
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    }
  }
}
</script>

<style lang="scss">
.main-content {
  height: calc(100vh - 80px);
}
</style>
