<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body class="bg-light">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    <div class="d-flex flex-column flex-md-row align-items-center pl-3 pt-3 px-md-4 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto pb-3 text-danger">Projektory</h5>
        <a class="btn btn-outline-danger p-2 mb-2" href="http://localhost/php/index.php">Lista produktów</a>
    </div>

    <form method="POST">
        <div class="container text-dark text-center mt-5 pt-5">
            <h3 class="mb-5">Dodaj projektor</h3>
            <div class="row mx-5 my-2">
                <div class="col-6">link name homework date type</div>
            </div>
            <div class="row mx-5 my-2">
                <div class="col-3">
                    <input type="text" name="link"></div>
                <div class="col-3">
                    <input type="text" name="name"></div>
                <div class="col-2">
                    <input type="text" name="homework"></div>
                <div class="col-2">
                    <input type="text" name="date"></div>
                <div class="col-2">
                    <input type="text" name="type"></div>
            </div>
        </div>

        <input type="reset" value="Zrezygnuj" class="btn btn-danger mx-5">
        <input type="submit" value="Dodaj!" name="btn" class="btn btn-danger mx-5">
        </div>
    </form>


    <?php
    $url = 'localhost';
    $identyfikator = 'root';
    $haslo = '';
    $baza_danych = 'school';
    $tabela = 'reference';

    if (isset($_POST["name"]) && isset($_POST["link"])) {
        $name = $_POST["name"];
        $link = $_POST["link"];
        $homework = $_POST["homework"];
        $date = $_POST["date"];
        $type = $_POST["type"];

        $id_pol = mysqli_connect($url, $identyfikator, $haslo, $baza_danych) or die("</br>BŁĄD POŁĄCZENIA Z BAZĄ " . $baza_danych);

        $zapytanie = "insert into " . $tabela . " (name,homework,date,link,type) values
            ('$name','$homework','$date','$link','$type')";

        mysqli_query($id_pol, $zapytanie) or die("<b>Błąd dodawania rekordu.
            Zapytanie:</b></br>" . $zapytanie);
    }

    ?>
    <style>
        * {
            font-family: 'Comfortaa';
        }

        input {
            background-color: #e3e3e3;
            border-radius: 4px;
            border: none;
            padding: 0.5em
        }
    </style>
    <script src="js.js"></script>
</body>

</html>