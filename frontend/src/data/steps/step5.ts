import type { Step } from '@/types/Step'

export const step5: Step = {
  id: 's5',
  title: '',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#333',
    fontSize: 'clamp(15px, 2vw, 30px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'start',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    minWidth: '90vw',
    whitespace: 'pre-wrap'
  },
  description2Style: {
    position: 'absolute',
    top: '300px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#333',
    fontSize: 'clamp(14px, 2vw, 30px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'start',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    minWidth: '90vw',
    whitespace: 'pre-wrap'
  },
  button1: [
    { label: 'chatGPTでログの探し方を聞く', actionKey: 'goToChatGPT' }
  ],
  button1Style: {
    position: 'absolute',
    top: '280px',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button2: [
    { label: '戻る', actionKey: 'goToPrevious2' }
  ],
  button2Style: {
    position: 'absolute',
    top: '420px',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  }
}
