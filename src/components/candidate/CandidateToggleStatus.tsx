import * as React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useFirestore } from 'react-redux-firebase'
import {
  Candidate as ICandidate,
  CandidateStatus,
} from '../../redux/schema/candidates'

const ToggleStatus: React.FC<{ item: ICandidate }> = ({ item }) => {
  const firestore = useFirestore()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const getItem = (item: ICandidate) =>
    firestore.collection('candidates').doc(item.id)

  const handleToggleStatus = (status: CandidateStatus) => {
    handleClose()
    getItem(item).update({
      status,
    })
  }

  const handleDelete = () => {
    handleClose()
    getItem(item).delete()
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDelete}>delete</MenuItem>
        {Object.values(CandidateStatus)
          .filter((status) => status !== item.status)
          .map((status) => (
            <MenuItem
              key={status}
              onClick={handleToggleStatus.bind(null, status)}
            >
              {status}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}

export default ToggleStatus
