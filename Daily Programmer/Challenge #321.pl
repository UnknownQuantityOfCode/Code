# [2017-06-27] Challenge #321 [Easy] Talking Clock
# https://www.reddit.com/r/dailyprogrammer/comments/6jr76h/20170627_challenge_321_easy_talking_clock/
# Description

# No more hiding from your alarm clock! You've decided you want your computer to keep you updated on the time so you're never late again. A talking clock takes a 24-hour time and translates it into words.

# Input Description

# An hour (0-23) followed by a colon followed by the minute (0-59).

# Output Description

# The time in words, using 12-hour format followed by am or pm.

# Sample Input data

# 00:00
# 01:30
# 12:05
# 14:01
# 20:29
# 21:00
# Sample Output data

# It's twelve am
# It's one thirty am
# It's twelve oh five pm
# It's two oh one pm
# It's eight twenty nine pm
# It's nine pm

use v5.10;

use strict;
use warnings;

use Test;
BEGIN { plan tests => 14 }

my @tens = ("oh ", "", "twenty ", "thirty ", "fourty ", "fifty ");
my @ones = ("twelve ", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen ");

sub talk {
	my $time = shift;
	my ($h,$m) = split(':', $time);
	return "It's ".(($m == 0) ? $ones[$h%12] : ($m%10 == 0) ? $ones[$h%12].$tens[($m/10)] : ($m < 10 || $m >= 20) ? $ones[$h%12].$tens[($m/10)].$ones[$m%10] : $ones[$h%12].$ones[$m%10]).(($h >= 12) ? 'pm':'am');
}

my $tests = [['00:00',"It's twelve am"], ['01:30',"It's one thirty am"], ['12:05',"It's twelve oh five pm"], ['14:01',"It's two oh one pm"], ['20:29',"It's eight twenty nine pm"], ['21:00',"It's nine pm"]];
foreach my $test (@$tests){
	say "Testing ".$test->[0].' = '.talk($test->[0]);
	say ok(talk($test->[0]),$test->[1]);
}
