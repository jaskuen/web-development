PROGRAM PrintOnServer(INPUT, OUTPUT);
USES
  DOS;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('Request-Method: ', GetEnv('REQUEST_METHOD'));
  WRITELN('Query-String: ', GetEnv('QUERY_STRING'));
  WRITELN('Content-Length: ', GetEnv('CONTENT_LENGHT'));
  WRITELN('Http_User_Agent: ', GetEnv('HTTP_USER_AGENT'));
  WRITELN('Http_Host: ', GetEnv('HTTP_HOST'))
END.

