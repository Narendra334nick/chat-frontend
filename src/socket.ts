import { io } from 'socket.io-client'
import  config  from './config/config';

const socket = (token: string) => {
  return io(config.app.baseUrl || '', {
    extraHeaders: {
      Authorization: 'Bearer ' + token,
    },
  })
}

export default socket