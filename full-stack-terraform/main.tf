# VPC 생성
resource "aws_vpc" "terraform-vpc" {
  tags = {
    Name = "테라폼 VPC"
  }
  cidr_block = "10.0.0.0/16"
  enable_dns_hostnames = true
}

# Public 서브넷 생성
resource "aws_subnet" "public1" {
    availability_zone = "ap-northeast-2a"
    vpc_id = aws_vpc.terraform-vpc.id
    cidr_block = "10.0.0.0/20"
    tags = {
      "Name" = "public subnet1"
    }
}

resource "aws_subnet" "public2" {
    availability_zone = "ap-northeast-2b"
    vpc_id = aws_vpc.terraform-vpc.id
    cidr_block = "10.0.16.0/20"
    tags = {
      "Name" = "public subnet2"
    }
}

#Private 서브넷 생성
resource "aws_subnet" "private1" {
    availability_zone = "ap-northeast-2a"
    vpc_id = aws_vpc.terraform-vpc.id
    cidr_block = "10.0.128.0/20"
    tags = {
      "Name" = "private subnet1"
    }
}

resource "aws_subnet" "private2" {
    availability_zone = "ap-northeast-2b"
    vpc_id = aws_vpc.terraform-vpc.id
    cidr_block = "10.0.144.0/20"
    map_public_ip_on_launch = false
    tags = {
      "Name" = "private subnet2"
    }
}

#인터넷 게이트웨이 생성
resource "aws_internet_gateway" "terraform-igw" {
  vpc_id = aws_vpc.terraform-vpc.id
  tags = {
    Name = "terraform-igw"
  }
}

#eip 생성
resource "aws_eip" "terraform-eip" {
  vpc      = true
}

#NAT 게이트웨이 생성
resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.terraform-eip.id
  subnet_id     = aws_subnet.public2.id #NAT가 사용될 서브넷 지정, 여기서는 db 서브넷 그룹? ㄴㄴ 퍼블릭 b
  connectivity_type = "public"

  tags = {
    Name = "terraform Nat gw"
  }
  depends_on = [aws_internet_gateway.terraform-igw]
}

#Public route table 생성
resource "aws_route_table" "public-routing-table-terraform" {
  vpc_id = aws_vpc.terraform-vpc.id
  route {
      cidr_block = "0.0.0.0/0"
      gateway_id = aws_internet_gateway.terraform-igw.id
  }
  tags = {
    "Name" = "public-routing-table"
  }
}

#Private route table 생성
resource "aws_route_table" "private1-routing-table-terraform" {
  vpc_id = aws_vpc.terraform-vpc.id
  route {
      cidr_block = "0.0.0.0/0"
      gateway_id = aws_nat_gateway.nat.id
  }
  tags = {
    "Name" = "private1-routing-table"
  }
}
resource "aws_route_table" "private2-routing-table-terraform" {
  vpc_id = aws_vpc.terraform-vpc.id
  route {
      cidr_block = "0.0.0.0/0"
      gateway_id = aws_nat_gateway.nat.id
  }
  tags = {
    "Name" = "private2-routing-table"
  }
}

#Public Route table 연결
resource "aws_route_table_association" "public1-association" {
  subnet_id = aws_subnet.public1.id
  route_table_id = aws_route_table.public-routing-table-terraform.id
}
resource "aws_route_table_association" "public2-association" {
  subnet_id = aws_subnet.public2.id
  route_table_id = aws_route_table.public-routing-table-terraform.id
}

##Private Route table 연결
resource "aws_route_table_association" "private1-association" {
  subnet_id = aws_subnet.private1.id
  route_table_id = aws_route_table.private1-routing-table-terraform.id
}
resource "aws_route_table_association" "private2-association" {
  subnet_id = aws_subnet.private2.id
  route_table_id = aws_route_table.private2-routing-table-terraform.id
}