import type { Step } from '@/types/Step'

export const step9: Step = {
  id: 's9',
  title: '',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '100px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#333',
    fontSize: 'clamp(20px, 4vw, 40px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'center',
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  },
  button1: [
    { label: '正しく実行し直したら正常になった', actionKey: 'goToNext' }
  ],
  button1Style: {
    position: 'absolute',
    top: '420px',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    height: '80px',
    width: '25vw'
  },
  button2: [
    { label: '仕様書を確認する必要が出た', actionKey: 'goToNext2' }
  ],
  button2Style: {
    position: 'absolute',
    top: '420px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '80px',
    width: '25vw'
  },
  button3: [
    { label: '修正が必要なのがわかった', actionKey: 'goToNext3' }
  ],
  button3Style: {
    position: 'absolute',
    top: '420px',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    height: '80px',
    width: '25vw'
  },
  button4: [
    { label: '戻る', actionKey: 'goToHowToDebug' }
  ],
  button4Style: {
    position: 'absolute',
    top: '532px',
    left: '10%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  }
}
