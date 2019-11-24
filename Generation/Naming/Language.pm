package Language;

use v5.10;

use utf8;

use strict;
use warnings;

use Data::Dumper;
use List::Util 'shuffle';

sub new {
	my $class = shift;
	my %data = @_;

	my $self = {
		all_consonants => [qw(b c d f g h j k l m n p q r s t v w x y z)],
		all_vowels => [qw(a e i o u)],
		all_sibilants => [qw(s ch f)],
		all_finals => [qw(m n ng)],

		number_consonants => 6,
		number_vowels => 5,
		number_sibilants => 3,
		number_finals => 3,

		restrictions => ['(.)\1', '(?:s|ch|f)(?:s|ch)', '[rl][rl]']
	};

	foreach my $k (keys %data){
		$self->{$k} = $data{$k} if ($k =~ /^(?:all_|number_)(?:consonants|vowels|sibilants|finals)|restrictions|default_(structure)$/igm);
	}

	$self = _build_language($self);

	return bless($self, $class);
}

sub _build_language {
	my $self = shift;

	foreach my $num (qw(number_consonants number_vowels number_sibilants number_finals)) {
		my $list_name = $num;
		$list_name =~ s/number/all/igm;
		$self->{$num} = _min((scalar @{$self->{$list_name}}), $self->{$num});
	}

	foreach my $t (qw(consonants vowels sibilants finals)){
		@{$self->{$t}}	= (shuffle @{$self->{'all_'.$t}})[0..($self->{'number_'.$t} - 1)];
	}

	return $self;
}

sub set {
	my $self = shift;
	my ($key, $value) = @_;
	if($key =~ /^(?:all_|number_)(?:consonants|vowels|sibilants|finals)|restrictions|default_(structure)$/igm){
		$self->{$key} = $value;
		if($key =~ /consonants|vowels|sibilants|finals/igm){
			$self->_build_language();
		}
		return 1;
	}
	return 0;
}

sub generate_syllable {
	my $self = shift;
	my $structure = shift || $self->{default_structure} || die "Missing structure";
	my $syllable;
	foreach my $type (split('|', $structure)){
		if($type =~ /^[a-z]$/gm){ next if (rand() > 0.5)}
		$type = uc($type);
		$syllable .= ($type eq 'S') ? (shuffle @{$self->{sibilants}})[0] : ($type eq 'C') ? (shuffle @{$self->{consonants}})[0] : ($type eq 'F') ? (shuffle @{$self->{finals}})[0] : (shuffle @{$self->{vowels}})[0];
	}
	foreach my $r (@{$self->{restrictions}}){
		if ($syllable =~ /$r/igm) {
			$syllable = $self->generate_syllable($structure);
		}
	}
	return $syllable;
}

sub _min {
	my ($x,$y) = @_;
	return ($x,$y)[$x > $y]
}

sub _max {
	my ($x,$y) = @_;
	return ($x,$y)[$x < $y]
}

1;
