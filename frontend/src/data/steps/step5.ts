import type { Step } from '@/types/Step'

export const step5: Step = {
  title: 'ステップ5',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#333',
    fontSize: 'clamp(18px, 2vw, 30px)',
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
    top: '70%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#333',
    fontSize: 'clamp(18px, 2vw, 30px)',
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
    top: '60%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button2: [
    { label: '戻る', actionKey: 'goToPrevious2' }
  ],
  button2Style: {
    position: 'absolute',
    top: '80%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  }
}
