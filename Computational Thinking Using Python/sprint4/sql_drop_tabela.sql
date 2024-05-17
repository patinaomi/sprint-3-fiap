BEGIN
   BEGIN
      EXECUTE IMMEDIATE 'DROP TABLE T_Usuario_Py';
   EXCEPTION
      WHEN OTHERS THEN
         IF SQLCODE != -942 THEN
            RAISE;
         END IF;
   END;

   BEGIN
      EXECUTE IMMEDIATE 'DROP TABLE T_Ticket_Py';
   EXCEPTION
      WHEN OTHERS THEN
         IF SQLCODE != -942 THEN
            RAISE;
         END IF;
   END;

   BEGIN
      EXECUTE IMMEDIATE 'DROP TABLE T_Leads_Py';
   EXCEPTION
      WHEN OTHERS THEN
         IF SQLCODE != -942 THEN
            RAISE;
         END IF;
   END;
END;
