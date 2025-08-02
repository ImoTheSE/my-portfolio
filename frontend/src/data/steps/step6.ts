import type { Step } from '@/types/Step'

export const step6: Step = {
  id: 's6',
  title: '',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '100px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#333',
    fontSize: 'clamp(18px, 4vw, 40px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'center',
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  },
  button1: [
    { label: '戻る', actionKey: 'goToPrevious3' }
  ],
  button1Style: {
    position: 'absolute',
    top: '532px',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%',
    backgroundColor: '#3b82f6',
    color: 'white',
    cursor: 'pointer',
    border: 'none'
  },
  button2: [
    { label: 'エラー箇所を特定した', actionKey: 'goToNext' }
  ],
  button2Style: {
    position: 'absolute',
    top: '420px',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    height: '50px',
    minWidth: '15%',
    backgroundColor: '#3b82f6',
    color: 'white',
    cursor: 'pointer',
    border: 'none'
  },
  button3: [
    { label: 'ログの読み方をChatGPTに聞く', actionKey: 'goToChatGPT' }
  ],
  button3Style: {
    position: 'absolute',
    top: '420px',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    height: '50px',
    minWidth: '15%',
    backgroundColor: '#3b82f6',
    color: 'white',
    cursor: 'pointer',
    border: 'none'
  }
}
