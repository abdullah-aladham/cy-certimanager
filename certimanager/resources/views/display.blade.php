<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<style>
    table{
        border: 1px solid black;
        border-collapse: collapse;
    }
    th,td{
        padding:20px;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
    }
</style>

</head>
<body>
    <table >
        <tr>
            <th>ID</th>
            <th>Logged_At</th>
            <th>Not_Before</th>
            <th>Not_After</th>
            <th>Common_Name</th>
            <th>Matching_Identities</th>
            <th>Issuer_Name</th>
            <th>serial_number</th>
            <th>Issuer_id</th>
        </tr>
        @foreach($certificate as $row)
        <tr>
            <td>{{$row->id}}</td>
            <td>{{$row->Logged_At}}</td>
            <td>{{$row->Not_Before}}</td>
            <td>{{$row->Not_After}}</td>
            <td>{{$row->Common_Name}}</td>
            <td>{{$row->Matching_Identities}}</td>
            <td>{{$row->Issuer_Name}}</td>
            <td>{{$row->serial_number}}</td>
            <td>{{$row->Issuer_id}}</td>




        </tr>
        @endforeach
       
    </table>
</body>
</html>