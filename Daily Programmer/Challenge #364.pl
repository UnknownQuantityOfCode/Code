# [2018-06-18] Challenge #364 [Easy] Create a Dice Roller
# https://www.reddit.com/r/dailyprogrammer/comments/8s0cy1/20180618_challenge_364_easy_create_a_dice_roller/
use v5.10;
use List::Util qw(sum);

sub roll {
	my $die_string = shift;
	my ($die,$max) = ($die_string =~ /^(\d{1,})d(\d{1,})$/igm);
	my @rolls;
	for (my $var = 0; $var < $die; $var++) {
		push @rolls, int(rand($max)+1);
	}
	say sum(@rolls).': '.join(', ', @rolls);
}

roll('3d6');
roll('9d12');