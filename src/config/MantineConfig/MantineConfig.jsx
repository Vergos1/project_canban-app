import { createTheme } from '@mantine/core';




const CustomTheme = createTheme({
    colors: {
        //background-color
        background: [
            '#FEE2E2',
            '#100A17',
            '#E1E1E1'
        ],

        //text-color
        text: [
            '#ffffff',
            '#ec4899',
            '#e1e1e1',
            '#100a17'
        ]

    },
    components: {
        LoadingOverlay: {
            defaultProps: {
                styles: {
                    overlay: {
                        backgroundColor: '#1A0D26',
                        opacity: '0.6'
                    }
                }
            }
        },
        Loader: {
            defaultProps: {
                styles: {
                    root: {
                        borderColor: '#1A0D26',
                        color: '#ffffff'
                    }
                }
            }
        },
        Paper: {
            defaultProps: {
                styles: {
                    root: {
                        border: 'none',
                        backgroundColor: '#261339'
                    }
                }
            }
        },
        Modal: {
            defaultProps: {
                styles: {
                    header: {
                        backgroundColor: '#1A0D26',
                        padding: '24px 0 32px 0'
                    },
                    body: {
                        padding: '0'
                    },
                    content: {
                        padding: '0 24px 24px 24px',
                        backgroundColor: '#1A0D26'
                    },
                    title: {
                        fontSize: '16',
                        fontWeight: '600',
                        lineHeight: '16px',
                        color: '#ffffff'
                    }
                }
            }
        },
        Input: {
            defaultProps: {
                styles: {
                    input: {
                        border: 'none',
                        marginTop: '5px',
                        padding: '5px 10px',
                        height: '44px',
                        color: '#ffffff',
                        backgroundColor: '#100718',
                        '&:placeholder': {
                            color: '#64596E'
                        }
                    }
                }
            }
        },
        Title: {
            defaultProps: {
                styles: {
                    root: {
                        color: '#ffffff'
                    }
                }
            }
        },
        Button: {
            defaultProps: {
                styles: {
                    root: {
                        border: 'none',
                        marginTop: '5px',
                        padding: '5px 10px',
                        height: '44px',
                        color: '#ffffff',
                        backgroundColor: '#2F2752',
                        '&:hover': {
                            backgroundColor: '#2A2132'
                        }
                    }
                }
            }
        },
        PasswordInput: {
            defaultProps: {
                styles: {
                    input: {
                        border: 'none',
                        marginTop: '5px',
                        padding: '5px 10px',
                        height: '44px',
                        color: '#ffffff',
                        backgroundColor: '#100718',
                        '&:placeholder': {
                            color: '#64596E'
                        }
                    }
                }
            }
        },
        ColorInput: {
            defaultProps: {
                styles: {
                    input: {
                        border: 'none',
                        marginTop: '5px',
                        padding: '5px 12px 5px 34px',
                        height: 'max-content',
                        color: '#ffffff',
                        backgroundColor: '#100718',
                        '&:placeholder': {
                            color: '#64596E'
                        }
                    }
                }
            }
        },
        Select: {
            defaultProps: {
                styles: {
                    input: {
                        border: 'none',
                        marginTop: '5px',
                        padding: '5px 10px',
                        height: 'max-content',
                        color: '#ffffff',
                        background: '#100718',
                        backgroundColor: '#100718',
                        '&:placeholder': {
                            color: '#64596E'
                        }
                    },
                    dropdown: {
                        border: 'none',
                        color: 'black',
                        maxHeight: 200,
                        overflowY: 'auto',
                        '&[dataSelected]': {
                            color: 'black !important'
                        }
                    }
                }
            }
        }

    }
});

export default CustomTheme;
