export default {
  'appenders': [
    {
      'type': 'console'
    },
    {
      'type': 'clustered',
      'appenders': [
        {
          'type': 'dateFile',
          'filename': 'http.log',
          'pattern': '-yyyy-MM-dd',
          'category': 'http'
        },
        {
          'type': 'file',
          'filename': 'app.log',
          'maxLogSize': 10485760,
          'pattern': '-yyyy-MM-dd',
          'numBackups': 5
        },
        {
          'type': 'logLevelFilter',
          'level': 'ERROR',
          'appender': {
            'type': 'file',
            'filename': 'errors.log'
          }
        }
      ]
    }
  ]
}
