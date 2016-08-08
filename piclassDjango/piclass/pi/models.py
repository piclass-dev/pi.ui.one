from __future__ import unicode_literals

from django.db import models

# Create your models here.


# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.

class City(models.Model):
    name = models.CharField(max_length=20, blank=True,null=True)
    id = models.CharField(primary_key=True,max_length=9, blank=True)

    class Meta:
        managed = False
        db_table = 'city'


class Cityid(models.Model):
    cityid = models.CharField(max_length=10,primary_key=True)
    city = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'cityid'


class Class(models.Model):
    time = models.DateTimeField()
    username = models.CharField(max_length=20)
    teacher = models.CharField(max_length=20)
    class_name = models.CharField(max_length=20)
    class_time = models.CharField(max_length=20)
    class_address = models.CharField(max_length=20)
    class_field = models.CharField(db_column='class', primary_key=True, max_length=20)  # Field renamed because it was a Python reserved word.
    type = models.CharField(max_length=1)
    notice = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'class'


class Count(models.Model):
    time = models.DateTimeField()
    count_id = models.CharField(primary_key=True, max_length=10)
    class_field = models.CharField(db_column='class', max_length=10)  # Field renamed because it was a Python reserved word.
    class_name = models.CharField(max_length=20)
    class_time = models.CharField(max_length=20)
    class_address = models.CharField(max_length=20)
    state = models.CharField(max_length=1)
    username = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'count'


class CountInfo(models.Model):
    time = models.DateTimeField()
    ip = models.CharField(max_length=30)
    username = models.CharField(max_length=20)
    count_id = models.CharField(max_length=10)
    timediff = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'count_info'
        unique_together = (('username', 'count_id'),)


class Discuss(models.Model):
    id = models.IntegerField(primary_key=True)
    time = models.DateTimeField()
    username = models.CharField(max_length=20)
    content = models.CharField(max_length=1000)

    class Meta:
        managed = False
        db_table = 'discuss'


class Fileall(models.Model):
    time = models.DateTimeField(primary_key=True)
    class_field = models.CharField(db_column='class', max_length=20)  # Field renamed because it was a Python reserved word.
    filename = models.CharField(max_length=200)
    username = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'fileall'


class Homework01(models.Model):
    time = models.CharField(primary_key=True,max_length=20)
    username = models.CharField(max_length=20)
    score = models.CharField(max_length=10)
    notice = models.CharField(max_length=300)
    id = models.CharField(max_length=10)
    code = models.CharField(max_length=1000)

    class Meta:
        managed = False
        db_table = 'homework01'
        unique_together = (('username', 'id'),)


class Homework07(models.Model):
    username = models.CharField(max_length=30)
    id1 = models.IntegerField()
    id2 = models.IntegerField()
    ans = models.CharField(max_length=100)
    score = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'homework07'


class Homework1(models.Model):
    id = models.CharField(primary_key=True, max_length=10)
    title = models.CharField(max_length=100)
    username = models.CharField(max_length=20)
    class_field = models.CharField(db_column='class', max_length=20)  # Field renamed because it was a Python reserved word.
    input = models.CharField(max_length=200)
    print_field = models.CharField(db_column='print', max_length=100)  # Field renamed because it was a Python reserved word.
    detail = models.CharField(max_length=200)
    lang = models.CharField(max_length=1)
    chapter = models.CharField(max_length=2)
    id2 = models.CharField(max_length=5)

    class Meta:
        managed = False
        db_table = 'homework1'


class Homework2(models.Model):
    id = models.CharField(primary_key=True,max_length=10)
    title = models.CharField(max_length=20)
    username = models.CharField(max_length=20)
    class_field = models.CharField(db_column='class', max_length=10)  # Field renamed because it was a Python reserved word.
    detail = models.CharField(max_length=2000)
    ans = models.CharField(max_length=200)
    type = models.CharField(max_length=1)

    class Meta:
        managed = False
        db_table = 'homework2'


class Homework7(models.Model):
    time = models.DateTimeField()
    id = models.CharField(primary_key=True,max_length=10)
    chapter = models.CharField(max_length=2)
    title = models.CharField(max_length=20)
    username = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'homework7'


class Homework71(models.Model):
    id1 = models.CharField(max_length=4)
    id2 = models.IntegerField()
    chapter = models.CharField(max_length=2)
    question = models.CharField(max_length=800)
    ans = models.CharField(max_length=200)
    jx = models.CharField(max_length=800)
    notice = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'homework71'
        unique_together = (('id1', 'id2'),)


class Identify(models.Model):
    time = models.DateTimeField(blank=True, null=True)
    username = models.CharField(max_length=20)
    openid = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=40)
    dormitory = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'identify'
        unique_together = (('username', 'openid'),)


class Info(models.Model):
    name = models.CharField(max_length=10, blank=True, null=True)
    phone = models.CharField(max_length=11, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'info'


class Info1(models.Model):
    number = models.CharField(max_length=8, blank=True, null=True)
    name = models.CharField(max_length=10, blank=True, null=True)
    grade = models.CharField(max_length=4, blank=True, null=True)
    academy = models.CharField(max_length=4, blank=True, null=True)
    class_field = models.CharField(db_column='class', max_length=10, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    email = models.CharField(max_length=50, blank=True, null=True)
    phone = models.CharField(max_length=11, blank=True, null=True)
    qq = models.CharField(max_length=11, blank=True, null=True)
    id = models.CharField(primary_key=True,max_length=18, blank=True)

    class Meta:
        managed = False
        db_table = 'info1'


class Lab(models.Model):
    id = models.CharField(primary_key=True, max_length=5)
    address = models.CharField(max_length=10)
    count = models.IntegerField()
    notice = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'lab'


class Message(models.Model):
    id = models.IntegerField(primary_key=True)
    time = models.DateTimeField()
    content = models.CharField(max_length=1000)
    author = models.CharField(max_length=10)
    receiver = models.CharField(max_length=100)
    class_field = models.CharField(db_column='class', max_length=10)  # Field renamed because it was a Python reserved word.
    type = models.CharField(max_length=1)
    title = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'message'


class Navigation(models.Model):
    type = models.IntegerField()
    title = models.CharField(max_length=10)
    link = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'navigation'


class Program(models.Model):
    time = models.DateTimeField()
    id = models.IntegerField(primary_key=True)
    type = models.CharField(max_length=1)
    lang = models.CharField(max_length=1)
    chapter = models.CharField(max_length=2)
    title = models.CharField(max_length=20)
    content = models.CharField(max_length=800)
    code = models.CharField(max_length=1000)
    jx = models.CharField(max_length=12000)
    input = models.CharField(max_length=100)
    print_field = models.CharField(db_column='print', max_length=100)  # Field renamed because it was a Python reserved word.
    username = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'program'
        unique_together = (('id', 'username'),)


class ProgramAns(models.Model):
    time = models.DateTimeField()
    username = models.CharField(max_length=20)
    score = models.CharField(max_length=10)
    notice = models.CharField(max_length=300)
    id = models.CharField(primary_key=True,max_length=10)
    code = models.CharField(max_length=1000)

    class Meta:
        managed = False
        db_table = 'program_ans'
        unique_together = (('username', 'id'),)


class ProgramAssign(models.Model):
    time = models.DateTimeField()
    id = models.IntegerField(primary_key=True)
    class_field = models.CharField(db_column='class', max_length=10)  # Field renamed because it was a Python reserved word.
    username = models.CharField(max_length=20)
    id2 = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'program_assign'


class Sessions(models.Model):
    session_id = models.CharField(unique=True, max_length=128)
    atime = models.DateTimeField()
    data = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sessions'


class Signin(models.Model):
    start = models.DateTimeField()
    end = models.DateTimeField()
    username = models.CharField(max_length=20)
    class_field = models.CharField(db_column='class', max_length=20)  # Field renamed because it was a Python reserved word.
    openid = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'signin'


class Software(models.Model):
    type = models.IntegerField()
    name = models.CharField(max_length=20)
    info = models.CharField(max_length=100)
    url = models.CharField(max_length=400)

    class Meta:
        managed = False
        db_table = 'software'


class Student(models.Model):
    time = models.DateTimeField()
    username = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    major = models.CharField(max_length=20, blank=True, null=True)
    class_field = models.CharField(db_column='class', max_length=5)  # Field renamed because it was a Python reserved word.
    score1 = models.IntegerField()
    score2 = models.IntegerField()
    score3 = models.IntegerField()
    class2 = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    notice = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'student'
        unique_together = (('username', 'class_field'),)


class Tmp1(models.Model):
    username = models.CharField(max_length=30)
    id1 = models.IntegerField()
    count = models.BigIntegerField()
    sum = models.DecimalField(max_digits=32, decimal_places=0, blank=True, null=True)
    avg = models.DecimalField(max_digits=14, decimal_places=4, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tmp1'


class Tmp2016(models.Model):
    username = models.CharField(max_length=30)
    name = models.CharField(max_length=20, blank=True, null=True)
    major = models.CharField(max_length=20, blank=True, null=True)
    sum_score = models.FloatField(blank=True, null=True)
    score1 = models.DecimalField(max_digits=54, decimal_places=0, blank=True, null=True)
    score2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tmp2016'
