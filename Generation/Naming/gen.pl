use v5.10;

use utf8;

use strict;
use warnings;

use Data::Dumper;
use List::Util 'shuffle';

my $config = {
	debug => 0,
};

# Default Values
my @all_consonants = qw(b c d f g h j k l m n p q r s t v w x y z);
my @all_vowels = qw(a e i o u);

# Define letters to use
my @consonants = (shuffle @all_consonants)[0..6];
say "Consonants: ".join(',', @consonants);
my @vowels = shuffle @all_vowels;
say "Vowels: ".join(',', @vowels);
my @sibilants = qw(s ch f);
my @finals = qw(m n ng);

# Syllable Restrictions
my @restrictions = (
	'(.)\1',
	'(?:s|ch|f)(?:s|ch)',
	'[rl][rl]'
);

# Define syllable structure
my $syllable_structure = shift || "sVCCVC";

# Build test syllables
my @syllables;
foreach (0..9){
	push @syllables, _build_syllable(structure => $syllable_structure, sibilants => \@sibilants, finals => \@finals, vowels => \@vowels, consonants => \@consonants);
}
say join(' / ', @syllables);

sub _build_syllable {
	my %data = @_;
	my $syllable;
	foreach my $type (split('|', $data{structure})){
		if($type =~ /^[a-z]$/gm){ next if (rand() > 0.5)}
		$type = uc($type);
		$syllable .= ($type eq 'S') ? (shuffle @{$data{sibilants}})[0] : ($type eq 'C') ? (shuffle @{$data{consonants}})[0] : ($type eq 'F') ? (shuffle @{$data{finals}})[0] : (shuffle @{$data{vowels}})[0];
	}
	foreach my $r (@restrictions){
		if ($syllable =~ /$r/igm) {
			my $old = $syllable if $config->{debug};
			$syllable = _build_syllable(%data);
			warn "Bad Syllable '$old' replaced with '$syllable'" if $config->{debug};
		}
	}
	return $syllable;
}