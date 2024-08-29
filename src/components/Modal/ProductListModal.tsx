import Modal from 'antd/es/modal/Modal'
import HomePage from '../../pages/HomePage'

export default function ProductListModal(
  {
    open,
    close
  }: {
    open: boolean,
    close: () => void
  }
) {
  return (
    <div>
      <Modal title="Product add"
        animation={true}
        width={800}
        height={800}
        onCancel={close}
        onOk={close}
        open={open}>
        <HomePage />
      </Modal>
    </div>
  )
}
