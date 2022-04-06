import React from 'react'
import Modal from '../Modal'
import { connect } from 'dva'

function StudentLoading(props) {
  return (
    <>
      {
        props.isLoading && <Modal>
          <h1 style={{
            fontSize: 50,
            color: "#fff"
          }}>加载中...</h1>
        </Modal>
      }
    </>
  )
}

const mapStateToProps = state => ({
  isLoading: state.loading.models.students
})

export default connect(mapStateToProps)(StudentLoading)