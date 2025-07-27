import type { Step } from '@/types/Step'

export const step7: Step = {
  id: 's7',
  title: '',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#333',
    fontSize: 'clamp(15px, 2vw, 25px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'center',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    minWidth: '90vw',
    whitespace: 'pre-wrap'
  },
  description2Style: {
    position: 'absolute',
    top: '240px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#333',
    fontSize: 'clamp(15px, 2vw, 25px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'center',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    minWidth: '90vw',
    whitespace: 'pre-wrap'
  },
  button1: [
    { label: 'IDE、デバッグって何？', actionKey: 'goToNext' }
  ],
  button1Style: {
    position: 'absolute',
    top: '220px',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button2: [
    { label: '次へ', actionKey: 'goToHowToDebug' }
  ],
  button2Style: {
    position: 'absolute',
    top: '220px',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  formFields: [
    { name: 'IDEname', label: '', type: 'text', placeholder: '例：VScode' }
  ],
  formStyle: {
    position: 'absolute',
    top: '420px',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    minWidth: '20%'
  },
  button3: [
    { label: 'chatGPTにデバッグのやり方を聞く', actionKey: 'goToChatGPT' }
  ],
  button3Style: {
    position: 'absolute',
    top: '420px',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button4: [
    { label: '戻る', actionKey: 'goToPrevious' }
  ],
  button4Style: {
    position: 'absolute',
    top: '532px',
    left: '10%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  }
}
