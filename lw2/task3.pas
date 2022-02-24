PROGRAM PrintHelloName(INPUT, OUTPUT);
USES
  DOS;
VAR
  Nm: STRING;
BEGIN
  WRITELN('Content-Type: text/plain');
  Nm := GetEnv('QUERY_STRING');
  delete(Nm, 1, 5);
  WRITELN;
  IF Nm <> ''
  THEN
    BEGIN
      WRITELN('Hello dear, ', Nm, '!')
    END
  ELSE
    WRITELN('Hello Anonymous!')
END.

