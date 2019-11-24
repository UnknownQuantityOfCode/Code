use v5.10;

use utf8;
use strict;
use warnings;

use Math::Round qw(nhimult);

my $sizes = {
	small => [3,1],
	medium => [6,10],
	large => [9,35]
};

my $guesses;
my $remaining = 0;
my $game_state = 1;

start();

sub start {
	my $size = get_size();
	my $board = build_board($size);
	draw_board($board);
	while($game_state == 1){
		guess($board, $size);
		draw_board($board);
	}
	end($game_state, $board);
}

sub build_board {
	my $size = shift || 'small';
	my $config = $sizes->{$size};
	my $b_counter = $config->[1];
	my $dimension = $config->[0] -1;
	$remaining = ($config->[0] * $config->[0]) - $b_counter;
	my $board;
	foreach my $i (0..($dimension)){
		foreach my $j (0..($dimension)){
			$board->[$i]->[$j] = 0;
		}	
	}
	while ($b_counter > 0) {
		my $y = int(rand($dimension+1));
		my $x = int(rand($dimension+1));
		if($board->[$y]->[$x] ne 'B'){
			$board->[$y]->[$x] = 'B';
			$b_counter--;
		}
	}
	foreach my $i (0..($dimension)){
		foreach my $j (0..($dimension)){
			$board->[$i]->[$j] = check_surrounds($board, $dimension, $i, $j) unless $board->[$i]->[$j];
		}	
	}
	return $board;
}

sub get_size {
	say "Game size? (small,medium,large,custom)";
	my $size = <STDIN>;
	while($size !~ /^(small|medium|large|custom)$/igm){
		say "Unknown size. Game size? (small,medium,large,custom)";
		$size = <STDIN>;
	}
	chomp $size;
	if($size eq 'custom'){
		say "Enter Game Size:";
		my $conf = <STDIN>;
		while($conf !~ /^\d*$/igm || $conf < 3){
			say "Unknown size, must be greater than 3. Enter Game Size:";
			$conf = <STDIN>;
		}
		$sizes->{'custom'} = [$conf, nhimult(1, ($conf * $conf * .10))];
	}
	return $size;
}

sub check_surrounds {
	my ($board, $dimension, $position_y, $position_x) = @_;
	my $b_count = 0;
	foreach my $y (($position_y-1)..($position_y+1)){
		foreach my $x (($position_x-1)..($position_x+1)){
			next if ($x < 0 || $y < 0 || $x > $dimension || $y > $dimension);
			unless ($position_x eq $x && $position_y eq $y) {
				if($board->[$y]->[$x] && $board->[$y]->[$x] eq 'B'){
					$b_count++;
				}
			}
		}
	}
	return $b_count;
}

sub draw_board {
	my $board = shift;
	my $reveal = shift;
	my $dimension = scalar(@$board) - 1;
	foreach my $i (0..($dimension)){
		foreach my $j (0..($dimension)){
			print "[".(($reveal || ($guesses->{$i}->{$j} && $guesses->{$i}->{$j} eq 1)) ? $board->[$i]->[$j] : '?')."]".(($j<$dimension) ? ',':'');
		}
		print "\n";
	}
}

sub guess {
	my $board = shift;
	my $size = shift;
	my $config = $sizes->{$size};
	my $dimension = $config->[0];
	say "Guess (x,y):";
	my $coords = <STDIN>;
	while($coords !~ /^(\d*),(\d*)$/igm){
		say "Guess (x,y):";
		$coords = <STDIN>;
	}
	chomp $coords;
	my @coordinates = split(',', $coords);
	my $x = $coordinates[0] - 1;
	my $y = $coordinates[1] - 1;
	if($x >= $dimension || $y >= $dimension || $x < 0 || $y < 0){
		say "\nInvalid square";
	}elsif($guesses->{$y}->{$x}){
		say "\nAlready guessed";
	}else{
		say "\n";
		$guesses->{$y}->{$x} = 1;
		if($board->[$y]->[$x] eq 'B'){
			$game_state = 0;
		}else{
			$remaining--;
		}
		if($remaining == 0){
			$game_state = 2;
		}
	}
}

sub end {
	my $state = shift;
	my $board = shift;
	if($state eq 1){
		say "\n\nGame Over";
	}elsif($state eq 2){
		say "\n\nYou Win!\n";
	}else{
		say "\n\nGame Over";
	}

	say "Final Board";
	draw_board($board, 1);
}