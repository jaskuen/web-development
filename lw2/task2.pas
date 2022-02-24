PROGRAM PrintOnServer(INPUT, OUTPUT);
USES
  DOS;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('Request-Method: ', GetEnv('REQUEST-METHOD'));
  WRITELN('Query-String: ', GetEnv('QUERY-STRING'));
  WRITELN('Content-Length: ', GetEnv('CONTENT-LENGHT'));
  WRITELN('Http_User_Agent: ', GetEnv('HTTP_USER_AGENT'));
  WRITELN('Http_Host: ', GetEnv('HTTP_HOST'))
END.

