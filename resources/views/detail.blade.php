@extends('template')
@section('main') 
<div class="container-fluid">
	<div class="row">
		<div class="col-xs-9">
			<h1>{{$data[$id][1]}} in CS3233 S2 AY 2016/17</h1>
			<p>
				<h2>Kattis account: {{$data[$id][2]}}</h2>
			</p>

			<p>
				<b>SPE</b>(ed) component: <b>{{$data[$id][3]}} + {{$data[$id][4]}} = {{$data[$id][5]}}</b><br>
				<b>DIL</b>(igence) component: <b>{{$data[$id][6]}} + {{$data[$id][7]}} + {{$data[$id][8]}} + {{$data[$id][9]}} = {{$data[$id][10]}}</b><br>
				<b>Sum = SPE + DIL = {{$data[$id][5]}} + {{$data[$id][10]}} = {{$data[$id][11]}} </b><br>
			</p>
		</div>
		<div class="flag-icon-background flag-icon-{{strtolower($data[$id][0])}} flag-div col-xs-1"></div>
		<div class="col-xs-2">
			<img src="img/winterfell.jpg" width="150px">
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12">
			<p><h3>Detailed scores:</h3></p>
		</div>
	</div>

	<table class = "table table-striped">
		<thead>
			<tr>
				<th>Component</th>
				<th>Sum</th>
				<th>01</th>
				<th>02</th>
				<th>03</th>
				<th>04</th>
				<th>05</th>
				<th>06</th>
				<th>07</th>
				<th>08</th>
				<th>09</th>
				<th>10</th>
				<th>11</th>
				<th>12</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Mini Contests</td>
				<td>{{$data[$id][3]}}</td>
				<td>{{$data[$id][3]}}</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Team Contests</td>
				<td>{{$data[$id][4]}}</td>
				<td>{{$data[$id][4]}}</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Homework</td>
				<td>{{$data[$id][6]}}</td>
				<td>{{$data[$id][6]}}</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Problem Bs</td>
				<td>{{$data[$id][7]}}</td>
				<td>{{$data[$id][7]}}</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Kattie Sets</td>
				<td>{{$data[$id][8]}}</td>
				<td>{{$data[$id][8]}}</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Achievements</td>
				<td>{{$data[$id][9]}}</td>
				<td>{{$data[$id][9]}}</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
		</tbody>
	</table>

	<p>Achievement details:</p>
		<ol>
			<li>Let it begins</li>
			<li>Quick starter</li>
			<li>Active in class 2/3</li>
		</ol>
	<p>Specific (public) comments about this student: <b>some comments</b></p>
</div>
@stop
