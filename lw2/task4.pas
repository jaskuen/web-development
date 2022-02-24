PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;

FUNCTION GetQueryStringParameter(QrStr: STRING): STRING;
VAR
  Classes, ClassName: STRING;
  Posit, StrLength, NameLength: INTEGER;
BEGIN{GetQueryStringParameter}
  Classes := GetEnv('QUERY_STRING');
  StrLength := LENGTH(QrStr);
  Posit := POS(QrStr, Classes);
  IF Posit > 0
  THEN
    BEGIN
      DELETE(Classes, 1, Posit + StrLength);
      Posit := POS('&', Classes);
      IF Posit > 0
      THEN
        GetQueryStringParameter := COPY(Classes, 1, Posit - 1)
      ELSE
        GetQueryStringParameter := Classes
    END
  ELSE
    GetQueryStringParameter := ''
END;{GetQueryStringParameter}
BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}
