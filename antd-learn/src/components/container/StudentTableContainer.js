import { connect } from 'dva'
import StudentTable from '../StudentTable'

const mapStateToProps = state => ({
  stus: state.students.result.datas,
  current: state.students.condition.page,
  pageSize: state.students.condition.limit,
  total: state.students.result.total,
  loading: state.loading.models.students
})

const mapDispatchToProps = dispatch => ({
  onChange(newPage) {
    dispatch({
      type: "students/setCondition",
      payload: {
        page: newPage
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentTable)