import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: '#203040',
    '&a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontSize: '1.4rem',
    fontWeight: 'Bold',
    color: 'white',
  },
  main: {
    minHeight: ' 80vh',
  },
  footer: { textAlign: 'center', margin: '1rem' },
  section: {
    margin: '1rem 0',
  },
  button :{
    background: '#f0c000'
  }
});
export default useStyles;
