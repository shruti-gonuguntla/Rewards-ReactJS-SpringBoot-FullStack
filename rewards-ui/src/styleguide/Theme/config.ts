import { createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#1E88E5',
      main: '#2196F3',
      dark: '#0079ae',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#dddf47',
      main: '#a8ad00',
      dark: '#757e00',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          minWidth: 'auto',
        },
        outlined: {
          background: '#FFF',
        },
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: red[500],
        },
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          color: red[500],
        },
        outlined: {
          backgroundColor: 'white',
          paddingLeft: 2,
          paddingRight: 2,
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
        adornedStart: {
          paddingLeft: 0,
        },
        adornedEnd: {
          paddingRight: 0,
        },
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          margin: 0,
          maxWidth: '100%',
        },
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '8px',
          '&:last-child': {
            padding: '8px !important',
          },
        },
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        labelPlacementStart: {
          marginRight: 0,
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
          padding: 0,
        },
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'white',
          },
          '&$focused': {
            backgroundColor: 'white',
          },
          '&$disabled': {
            color: 'initial',
            opacity: 0.6,
            backgroundColor: 'white',
            '&:before': {
              borderBottomStyle: 'solid',
            },
          },
        },
        underline: {
          '&$disabled': {
            '&:before': {
              borderBottomStyle: 'solid',
            },
          },
        },
        adornedEnd: {
          paddingRight: 0,
        },
      }
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          backgroundColor: 'white !important',
        },
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        groupedTextHorizontal: {
          border: 'none !important',
        },
      }
    },
  }


});
